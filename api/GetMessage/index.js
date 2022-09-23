module.exports = async function (context, req) {
  const date = "2022-09-23T07:27:46.719Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

