module.exports = async function (context, req) {
  const date = "2022-09-23T13:43:27.876Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

