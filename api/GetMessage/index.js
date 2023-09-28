module.exports = async function (context, req) {
  const date = "2023-09-28T08:12:09.386Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

