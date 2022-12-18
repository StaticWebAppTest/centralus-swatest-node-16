module.exports = async function (context, req) {
  const date = "2022-12-18T09:08:20.503Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

