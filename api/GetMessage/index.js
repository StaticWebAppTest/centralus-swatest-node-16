module.exports = async function (context, req) {
  const date = "2023-02-11T02:11:47.148Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

