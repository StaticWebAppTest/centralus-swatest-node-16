module.exports = async function (context, req) {
  const date = "2022-11-13T14:09:30.078Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

