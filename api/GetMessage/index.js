module.exports = async function (context, req) {
  const date = "2022-08-28T13:23:24.539Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

