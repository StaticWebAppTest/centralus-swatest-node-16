module.exports = async function (context, req) {
  const date = "2022-09-28T13:44:05.401Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

