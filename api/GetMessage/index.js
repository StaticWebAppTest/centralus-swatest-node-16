module.exports = async function (context, req) {
  const date = "2022-12-28T08:12:04.461Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

