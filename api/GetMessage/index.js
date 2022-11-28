module.exports = async function (context, req) {
  const date = "2022-11-28T17:09:33.483Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

