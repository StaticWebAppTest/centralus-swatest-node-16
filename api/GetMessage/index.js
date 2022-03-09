module.exports = async function (context, req) {
  const date = "2022-03-09T14:09:18.966Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

