module.exports = async function (context, req) {
  const date = "2023-07-15T02:37:09.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

