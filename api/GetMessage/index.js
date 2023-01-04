module.exports = async function (context, req) {
  const date = "2023-01-04T09:09:40.005Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

