module.exports = async function (context, req) {
  const date = "2022-06-08T09:10:33.478Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

