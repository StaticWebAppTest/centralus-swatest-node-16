module.exports = async function (context, req) {
  const date = "2022-10-27T17:19:45.689Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

