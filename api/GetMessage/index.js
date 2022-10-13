module.exports = async function (context, req) {
  const date = "2022-10-13T15:15:17.557Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

