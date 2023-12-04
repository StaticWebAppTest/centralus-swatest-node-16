module.exports = async function (context, req) {
  const date = "2023-12-04T13:12:40.267Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

