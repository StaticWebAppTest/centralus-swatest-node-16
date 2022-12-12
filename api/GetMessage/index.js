module.exports = async function (context, req) {
  const date = "2022-12-12T14:09:05.923Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

