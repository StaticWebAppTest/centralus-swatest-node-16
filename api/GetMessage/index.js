module.exports = async function (context, req) {
  const date = "2024-06-04T13:12:09.533Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

