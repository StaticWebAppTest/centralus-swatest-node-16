module.exports = async function (context, req) {
  const date = "2022-04-09T14:09:32.951Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

