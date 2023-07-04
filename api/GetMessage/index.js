module.exports = async function (context, req) {
  const date = "2023-07-04T13:20:43.652Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

