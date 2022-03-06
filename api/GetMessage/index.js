module.exports = async function (context, req) {
  const date = "2022-03-06T14:08:28.466Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

