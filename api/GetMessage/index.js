module.exports = async function (context, req) {
  const date = "2022-06-11T17:09:04.146Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

