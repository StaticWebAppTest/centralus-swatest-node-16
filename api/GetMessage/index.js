module.exports = async function (context, req) {
  const date = "2022-03-14T16:14:07.777Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

