module.exports = async function (context, req) {
  const date = "2023-04-12T13:12:36.850Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

