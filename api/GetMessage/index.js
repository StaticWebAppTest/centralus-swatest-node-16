module.exports = async function (context, req) {
  const date = "2022-10-28T21:10:45.063Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

