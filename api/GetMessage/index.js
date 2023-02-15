module.exports = async function (context, req) {
  const date = "2023-02-15T02:19:42.108Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

