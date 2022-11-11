module.exports = async function (context, req) {
  const date = "2022-11-11T09:11:44.723Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

