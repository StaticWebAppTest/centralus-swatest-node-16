module.exports = async function (context, req) {
  const date = "2022-12-23T14:08:17.876Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

