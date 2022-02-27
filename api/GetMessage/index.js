module.exports = async function (context, req) {
  const date = "2022-02-27T17:09:23.998Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

