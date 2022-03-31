module.exports = async function (context, req) {
  const date = "2022-03-31T08:13:08.503Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

