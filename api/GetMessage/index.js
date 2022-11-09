module.exports = async function (context, req) {
  const date = "2022-11-09T14:15:18.146Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

