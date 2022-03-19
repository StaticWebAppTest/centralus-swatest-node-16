module.exports = async function (context, req) {
  const date = "2022-03-19T14:09:37.796Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

