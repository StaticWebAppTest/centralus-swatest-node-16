module.exports = async function (context, req) {
  const date = "2022-02-28T13:20:46.991Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

