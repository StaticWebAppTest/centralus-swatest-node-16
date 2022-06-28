module.exports = async function (context, req) {
  const date = "2022-06-28T17:19:39.010Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

