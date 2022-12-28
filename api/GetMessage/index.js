module.exports = async function (context, req) {
  const date = "2022-12-28T17:08:22.939Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

