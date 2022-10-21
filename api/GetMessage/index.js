module.exports = async function (context, req) {
  const date = "2022-10-21T10:15:45.907Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

