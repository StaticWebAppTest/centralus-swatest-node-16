module.exports = async function (context, req) {
  const date = "2023-02-02T13:18:36.108Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

