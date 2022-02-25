module.exports = async function (context, req) {
  const date = "2022-02-25T08:12:01.058Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

