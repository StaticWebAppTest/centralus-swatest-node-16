module.exports = async function (context, req) {
  const date = "2022-12-25T03:10:05.550Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

