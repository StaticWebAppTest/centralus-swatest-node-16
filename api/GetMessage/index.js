module.exports = async function (context, req) {
  const date = "2022-12-28T14:08:23.658Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

