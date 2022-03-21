module.exports = async function (context, req) {
  const date = "2022-03-21T14:09:46.478Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

