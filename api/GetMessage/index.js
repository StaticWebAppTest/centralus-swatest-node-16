module.exports = async function (context, req) {
  const date = "2022-10-03T13:48:46.995Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

