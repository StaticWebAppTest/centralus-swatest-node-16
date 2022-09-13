module.exports = async function (context, req) {
  const date = "2022-09-13T13:42:45.258Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

