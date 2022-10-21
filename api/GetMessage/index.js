module.exports = async function (context, req) {
  const date = "2022-10-21T09:20:09.665Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

