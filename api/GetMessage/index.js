module.exports = async function (context, req) {
  const date = "2023-10-04T13:13:15.314Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

