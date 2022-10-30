module.exports = async function (context, req) {
  const date = "2022-10-30T09:11:30.777Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

