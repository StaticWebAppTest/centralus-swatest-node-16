module.exports = async function (context, req) {
  const date = "2022-09-13T18:15:26.461Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

