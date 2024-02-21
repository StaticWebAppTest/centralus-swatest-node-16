module.exports = async function (context, req) {
  const date = "2024-02-21T16:11:37.108Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

