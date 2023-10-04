module.exports = async function (context, req) {
  const date = "2023-10-04T01:45:43.759Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

