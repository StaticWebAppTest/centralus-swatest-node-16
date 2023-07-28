module.exports = async function (context, req) {
  const date = "2023-07-28T18:10:09.659Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

