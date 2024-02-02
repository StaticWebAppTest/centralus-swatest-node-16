module.exports = async function (context, req) {
  const date = "2024-02-02T15:09:27.108Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

