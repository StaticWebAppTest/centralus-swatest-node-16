module.exports = async function (context, req) {
  const date = "2022-06-27T17:16:43.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

