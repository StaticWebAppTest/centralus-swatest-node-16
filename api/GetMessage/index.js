module.exports = async function (context, req) {
  const date = "2023-02-14T07:09:57.046Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

